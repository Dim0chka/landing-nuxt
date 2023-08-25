from email.mime.multipart import MIMEMultipart
from email.mime.text import MIMEText
from email.mime.image import MIMEImage
import smtplib
from flask import Flask

app = Flask(__name__)

@app.route('/sendmail/<select>/<name>/<phone>', methods=['POST', 'GET'])
def sendmail(select, name, phone):
    msgRoot = MIMEMultipart('related')
    password = 'r8Bk3KPFeAyHUdc09ZGu' # Указать пароль
    msgRoot['From'] = '9851550674@mail.ru' # 
    msgRoot['To'] = 'Bugrick2004@yandex.ru'  
    msgRoot['Subject'] = '' # 
    msgAlternative = MIMEMultipart('alternative')
    msgRoot.attach(msgAlternative)

    msgText = f'{select}, {name}, {phone}'

    msgAlternative.attach(msgText)


    server = smtplib.SMTP('smtp.mail.ru') # Адрес SMTP сервера
    server.starttls()
    server.login(msgRoot['From'], password)
    server.sendmail(msgRoot['From'], msgRoot['To'], f'{select}, {name}, {phone}')
    # msgRoot.as_string()
    server.quit()
    print('Success')

    return 'OK'


if __name__ == '__main__':
    app.run()