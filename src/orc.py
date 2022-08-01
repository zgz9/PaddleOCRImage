import requests
from paddleocr import PaddleOCR
import pymysql as mysql
import pandas as pd
import cv2
import os

#下载图片的方法
def downloadImage(href,filename):
    headers = {'User-Agent': 'Mozilla/5.0 (Windows NT 6.1; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) '
                        'Chrome/63.0.3239.132 Safari/537.36'}
    try:
        #获取图片
        dimg = requests.get(href, headers=headers).content
        #在指定路径创建图片
        with open("C:\\mypc\\pythonproject\\log\\"+filename, 'wb') as f:
            f.write(dimg)
            f.close()
            print("图片"+str(filename)+"已下载")
            return filename
    except Exception as e:
        print('url:'+href+',图片无法下载')

#识别码
def regimage(url,isCut=False):
    #检测det+分类cls+识别rec，可以指定字体路径vis_font_path="C:/mypc/pythonproject/log/5c492f0fe41ef.ttf"
    ocr = PaddleOCR(use_pdserving=False, use_angle_cls=True, det=True, cls=True, use_gpu=False,
                    det_model_dir="C:/Users/zhaog/.paddleocr/inference/ch_PP-OCRv3_det_slim_infer/ch_PP-OCRv3_det_slim_infer/",
                    rec_model_dir="C:/Users/zhaog/.paddleocr/inference/ch_PP-OCRv3_rec_slim_infer/ch_PP-OCRv3_rec_slim_infer/",
                    cls_model_dir="C:/Users/zhaog/.paddleocr/inference/ch_ppocr_mobile_v2.0_cls_infer/ch_ppocr_mobile_v2.0_cls_infer/",
                    lang='ch')
    result = ocr.ocr(url, cls=True,  det=isCut)
    info = ''
    up = 0;
    down = 0;
    left = 0;
    leftsrc = 0;
    for line in result:
        print(line)
        if isCut:
            info = info + ',' + line[1][0]
            if line[1][0].startswith("时间"):
              down = int(line[0][2][1])
              left = int(line[0][1][0])
              up = int(line[0][1][1])
              leftsrc = int(line[0][0][0])
        else:
            info = str(line[0])
    print(info)
    if isCut and up!=0 and down!=0 and left!=0 and leftsrc!=0:
        im = cv2.imread(url)
        #im = im[949:981, 506:567] #时间
        #im = im[952:977, 608:638] #天
        #im = im[900:981, 567:608] #天
        print("{s},{s},{s},{s},",up,down,left,leftsrc)
        up = down - (down - up) * 2
        right = left + (left - leftsrc)
        im = im[up:down, left:right] #天
        #im = im[10:33, 11:189]#从上到下为190-380，从左往右为180-260
        save_path_file = os.path.join('./number', url)
        cv2.imwrite(save_path_file, im)

    return info

def queryDatabase():
    con = mysql.connect(host="xx.xx.xx.xx", port=3306, user="root", passwd="xxxxx", db="weixin", charset="utf8mb4")
    mycursor = con.cursor()
    print("连接成功")

    # 查询
    sql = "SELECT * FROM wx_imageinfo where insert_time between date_add(now(), interval - 11111160 minute) and now() and reg_info is null"
    result = pd.read_sql(sql, con=con)
    for index, row in result.iterrows():  # 按行遍历
        print("index:", index)
        print("-----start---------")
        id = row["id"]
        url = row["pic_url"]
        downloadImage(url, str(id) + '.png');
        info = regimage(str(id) + '.png', True)
        reg_days = ''
        if ''!= info:
            reg_days = regimage("./number/" +  str(id) + '.png', False)
            reg_days = reg_days.replace('天', '')
        #print(info)
        infoArray = info.split(",")
        reg_info = info
        reg_date = ''
        reg_time = ''
        reg_status = ''
        reg_nucleic_acid = ''
        for text in infoArray:
            if -1 != text.find("未见异常"):
              print("未见异常-绿码")
              reg_status = "未见异常-绿码"
            elif -1 != text.find("居家观察"):
              print("居家观察-黄码")
              reg_status = "居家观察-黄码"
            if -1 != text.find("年") and -1 != text.find("月") and -1 != text.find("日") :
              print("时间" + text)
              reg_date = text
            if 2 == text.find(":"):
              print(text)
              reg_time = text
            if -1 != text.find("阴性"):
              print("核酸-阴性")
              reg_nucleic_acid = "核酸-阴性"
            if -1 != text.find("阳性"):
              print("核酸-阳性")
              reg_nucleic_acid = "核酸-阳性"

        cursor = con.cursor()
        sql = """
            UPDATE wx_imageinfo
            SET reg_info = '"""+ reg_info + """',
             reg_time =  '"""+ reg_time + """',
             reg_date =  '"""+ reg_date + """',
             reg_status =  '"""+ reg_status + """',
             reg_nucleic_acid =  '"""+ reg_nucleic_acid + """',
             reg_days =  '"""+ reg_days + """'
            WHERE
                `id` = '"""+ str(id) + """';
        """
        print(sql)
        # 执行创建sql语句
        cursor.execute(sql)
        # 提交数据
        con.commit()
        print("-----end---------")
if __name__ == '__main__':
    queryDatabase()
    #regimage('6.png', True)
    #regimage('./number/6.png', False)

