import os
from dotenv import load_dotenv

load_dotenv()

language = os.getenv('language')
print(language)

text_en = {
    'introHeader': 'Sell pre-loved clothes completely free',
    'introSignUpBtn': 'Sign up for App',
    'introLogInBtn': 'I already have an account',
    'introAboutApp': 'About App: ',
    'introAboutAppText': 'Our platform',
    'chatScroll':  'Just now',
    'chatScrollMessage1': "Welcome to Vinted. We help you sell the clothes you no longer wear. Best of all - there are no selling fees on Vinted. You always get to keep 100% of what you make. Plus, you can shop for items you won't find in stores anymore and discover exciting new styles. Learn how Vinted works:",
    'chatScrollMessage2': 'And if you ever need help, just go to our Help Centre. You can also contact us from there and we proise to get back to you within 24 hours:',
    'chatScrollMessage3': "If you don't wear it - sell it!",
    'chatTeam': 'Team App',
    'chatTranslation1': 'Translate this conversation',
    'chatTranslation2': 'Show untranslated conversation',
    'chatTranslationGoogle': 'Translated by Google',
    'loginUserName': 'Username or email',
    'loginPassword': 'Password',
    'signupUsername': 'Username',
    'signupRegText': "By registering, I confirm that I accepted Vinted's",
    'signupTerms1': '',
    'signupTerms2': '',
    'signupTerms3': '',
    'signupPrivacy': '',
    'signupAge': ''
  }

line_info = 'const en = {\n'
line_info += (
'    introHeader: "{introHeader}",\n'
'    introSignUpBtn: "{introSignUpBtn}",\n'
'    introLogInBtn: "{introLogInBtn}",\n'
'    introAboutApp: "{introAboutApp}",\n'
'    introAboutAppText: "{introAboutAppText}",\n'
'    chatScroll: "{chatScroll}",\n'

'    chatTeam: "{chatTeam}",\n'
'    chatTranslation1: "{chatTranslation1}",\n'
'    chatTranslation2: "{chatTranslation2}",\n'
'    chatTranslationGoogle: "{chatTranslationGoogle}",\n'
'    loginUserName: "{loginUserName}",\n'
'    loginPassword: "{loginPassword}",\n'
).format(
introHeader = text_en["introHeader"],
introSignUpBtn = text_en["introSignUpBtn"],
introLogInBtn = text_en["introLogInBtn"],
introAboutApp = text_en["introAboutApp"],
introAboutAppText = text_en["introAboutAppText"],
chatScroll = text_en["chatScroll"],

chatTeam = text_en["chatTeam"],
chatTranslation1 = text_en["chatTranslation1"],
chatTranslation2 = text_en["chatTranslation2"],
chatTranslationGoogle = text_en["chatTranslationGoogle"],
loginUserName = text_en["loginUserName"],
loginPassword = text_en["loginPassword"]
)
line_info += '};'

f = open("src/i18n/supportedLanguages.js", "r")
file = f.read()
file = file.split("const ")
for object in file:
  if object == "":
    continue
  name = object[0:2]
  if name == language:
    lines = object.split("\n")
    for item in lines:
      print(item, "line")

f = open("demofile3.txt", "w")
f.write(line_info)
f.close()
