import os
from dotenv import load_dotenv
from language_map import text_en, text_pt
from json import loads
import random
from googletrans import Translator

load_dotenv()
language = os.getenv('language')
variable_value_map = loads(os.getenv('variable_value_map'))
number_of_mistranslations = loads(os.getenv('number_of_mistranslations'))

def change_values(values, new_values):
  cont = 1
  print('variables changed log')
  for item in new_values.keys():
    values[item] = new_values[item]
    print(cont, item, new_values[item])
    cont += 1

def generate_random_error(values: dict, new_values: dict):
  values_copy = list(values.keys())[:]  # copy
  random.shuffle(values_copy)
  words = values_copy[:number_of_mistranslations]
  for word in words:
    translator = Translator()
    text = translator.translate(values[word], src=language, dest='ru')
    new_values[word] = text.text

if language == "en":
  text = text_en
  other_language = "const pt = {};\n"

if language == "pt":
  text = text_pt
  other_language = "const en = {};\n"


generate_random_error(text, variable_value_map)
change_values(text, variable_value_map)

line_info = 'const '+ language +' = {\n'
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
'    signupUsername: "{signupUsername}",\n'
'    signupRegText: "{signupRegText}",\n'
'    signupTerms1: "{signupTerms1}",\n'
'    signupTerms2: "{signupTerms2}",\n'
'    signupTerms3: "{signupTerms3}",\n'
'    signupPrivacy: "{signupPrivacy}",\n'
'    signupAge: "{signupAge}",\n'
'    tutorialTitleFirstRoute: "{tutorialTitleFirstRoute}",\n'
'    tutorialDescription1: "{tutorialDescription1}",\n'
'    tutorialDescription2: "{tutorialDescription2}",\n'
'    tutorialTitleSecondRoute: "{tutorialTitleSecondRoute}",\n'
'    tutorialDescriptionSecondRoute1: "{tutorialDescriptionSecondRoute1}",\n'
'    tutorialDescriptionSecondRoute2: "{tutorialDescriptionSecondRoute2}",\n'
'    tutorialTitleThirdRoute: "{tutorialTitleThirdRoute}",\n'
'    tutorialDescriptionThirdRoute1: "{tutorialDescriptionThirdRoute1}",\n'
'    tutorialDescriptionThirdRoute2: "{tutorialDescriptionThirdRoute2}",\n'
'    footerHome: "{footerHome}",\n'
'    footerSearch: "{footerSearch}",\n'
'    footerSell: "{footerSell}",\n'
'    footerInbox: "{footerInbox}",\n'
'    footerProfile: "{footerProfile}",\n'
'    Price: "{Price}",\n'
'    pFText: "{pFText}",\n'
'    searchHeaderInput: "{searchHeaderInput}",\n'
'    seeAllText1: "{seeAllText1}",\n'
'    seeAllText2: "{seeAllText2}",\n'
'    wardrobeSpotlightHeader: "{wardrobeSpotlightHeader}",\n'
'    wardrobeSpotlightOPsUsername: "{wardrobeSpotlightOPsUsername}",\n'
'    wardrobeSpotlightFollowText: "{wardrobeSpotlightFollowText}",\n'
'    wardrobeSpotlightSeeMore: "{wardrobeSpotlightSeeMore}",\n'
'    wardrobeSpotlightsizes: "{wardrobeSpotlightsizes}",\n'
'    homeSearchHeader: "{homeSearchHeader}",\n'
'    homeSearchHeaderTitleWoman: "{homeSearchHeaderTitleWoman}",\n'
'    homeSearchHeaderTitleMan: "{homeSearchHeaderTitleMan}",\n'
'    homeSearchHeaderTitleChildren: "{homeSearchHeaderTitleChildren}",\n'
'    homeSearchHeaderTitleHome: "{homeSearchHeaderTitleHome}",\n'
'    homeSearchPopularViewSection: "{homeSearchPopularViewSection}",\n'
'    homeSearchPopularViewMiniSeeAll: "{homeSearchPopularViewMiniSeeAll}",\n'
'    homeSearchPopularViewSize: "{homeSearchPopularViewSize}",\n'
'    homeSearchPopularViewBrand: "{homeSearchPopularViewBrand}",\n'
'    homeSuggested: "{homeSuggested}",\n'
'    homeNewsfeed: "{homeNewsfeed}",\n'
'    inboxMessagesRoutesender: "{inboxMessagesRoutesender}",\n'
'    inboxMessagesRouteobject: "{inboxMessagesRouteobject}",\n'
'    inboxMessagesRoutedate: "{inboxMessagesRoutedate}",\n'
'    inboxNotificationsRoute: "{inboxNotificationsRoute}",\n'
'    inboxMessages: "{inboxMessages}",\n'
'    inboxNotifications: "{inboxNotifications}",\n'
'    ProfileFlyerGuide: "{ProfileFlyerGuide}",\n'
'    ProfileFlyerFavorite: "{ProfileFlyerFavorite}",\n'
'    ProfileFlyerPersonalisation: "{ProfileFlyerPersonalisation}",\n'
'    ProfileFlyerBalance: "{ProfileFlyerBalance}",\n'
'    ProfileFlyerOrders: "{ProfileFlyerOrders}",\n'
'    ProfileFlyerDiscount: "{ProfileFlyerDiscount}",\n'
'    ProfileFlyerForum: "{ProfileFlyerForum}",\n'
'    ProfileFlyerInviteFriends: "{ProfileFlyerInviteFriends}",\n'
'    ProfileFlyerHoliday: "{ProfileFlyerHoliday}",\n'
'    ProfileFlyerSettings: "{ProfileFlyerSettings}",\n'
'    ProfileFlyerCookies: "{ProfileFlyerCookies}",\n'
'    ProfileFlyerAbout: "{ProfileFlyerAbout}",\n'
'    ProfileFlyerLegal: "{ProfileFlyerLegal}",\n'
'    ProfileFlyerOurPlataform: "{ProfileFlyerOurPlataform}",\n'
'    ProfileFlyerHelp: "{ProfileFlyerHelp}",\n'
'    ProfileTermsText1: "{ProfileTermsText1}",\n'
'    ProfileTermsText2: "{ProfileTermsText2}",\n'
'    ProfileTermsText3: "{ProfileTermsText3}",\n'
'    ProfileTermsText4: "{ProfileTermsText4}",\n'
'    searchAll: "{searchAll}",\n'
'    searchWomenClothes: "{searchWomenClothes}",\n'
'    searchWomenShoes: "{searchWomenShoes}",\n'
'    searchWomenBags: "{searchWomenBags}",\n'
'    searchWomenAccessories: "{searchWomenAccessories}",\n'
'    searchWomenBeauty: "{searchWomenBeauty}",\n'
'    searchMenTodos: "{searchMenTodos}",\n'
'    searchMenClothes: "{searchMenClothes}",\n'
'    searchMenShoes: "{searchMenShoes}",\n'
'    searchMenAccessories: "{searchMenAccessories}",\n'
'    searchMenGrooming: "{searchMenGrooming}",\n'
'    searchKidsAll: "{searchKidsAll}",\n'
'    searchKidsGirlsClothing: "{searchKidsGirlsClothing}",\n'
'    searchKidsBoysClothing: "{searchKidsBoysClothing}",\n'
'    searchKidsToysAndGames: "{searchKidsToysAndGames}",\n'
'    searchKidsBabyCare: "{searchKidsBabyCare}",\n'
'    searchKidsBuggies: "{searchKidsBuggies}",\n'
'    searchKidsRideOnToys: "{searchKidsRideOnToys}",\n'
'    searchKidsCarSeatsAndChairs: "{searchKidsCarSeatsAndChairs}",\n'
'    searchKidsKidsFurniture: "{searchKidsKidsFurniture}",\n'
'    searchKidsSchoolSupplies: "{searchKidsSchoolSupplies}",\n'
'    searchKidsOtherKidsItems: "{searchKidsOtherKidsItems}",\n'
'    searchHomeTodos: "{searchHomeTodos}",\n'
'    searchHomeTextiles: "{searchHomeTextiles}",\n'
'    searchHomeHomeAccessories: "{searchHomeHomeAccessories}",\n'
'    searchHomeTableware: "{searchHomeTableware}",\n'
'    searchHomeBooks: "{searchHomeBooks}",\n'
'    searchHomeTitle: "{searchHomeTitle}",\n'
'    searchKidsTitle: "{searchKidsTitle}",\n'
'    searchMenTitle: "{searchMenTitle}",\n'
'    searchWomenTitle: "{searchWomenTitle}",\n'
'    sellPhotoText1: "{sellPhotoText1}",\n'
'    sellPhotoText2: "{sellPhotoText2}",\n'
'    sellUploadText: "{sellUploadText}",\n'
'    sellTitleDesc1: "{sellTitleDesc1}",\n'
'    sellTitleDesc2: "{sellTitleDesc2}",\n'
'    sellTitleDesc3: "{sellTitleDesc3}",\n'
'    sellTitleDesc4: "{sellTitleDesc4}",\n'
'    sellCategory: "{sellCategory}",\n'
'    sellBrand: "{sellBrand}",\n'
'    sellCondition: "{sellCondition}",\n'
'    sellPrice: "{sellPrice}",\n'
'    sellInterest: "{sellInterest}",\n'
'    sellUpload: "{sellUpload}",\n'
'    sellArticleText1: "{sellArticleText1}",\n'
'    sellArticleText2: "{sellArticleText2}",\n'
'    sellArticleText3: "{sellArticleText3}",\n'
'    sellArticleText4: "{sellArticleText4}",\n'
'    sellArticleText5: "{sellArticleText5}",\n'
'    sellArticleText6: "{sellArticleText6}",\n'
).format(
introHeader = text["introHeader"],
introSignUpBtn = text["introSignUpBtn"],
introLogInBtn = text["introLogInBtn"],
introAboutApp = text["introAboutApp"],
introAboutAppText = text["introAboutAppText"],
chatScroll = text["chatScroll"],
chatTeam = text["chatTeam"],
chatTranslation1 = text["chatTranslation1"],
chatTranslation2 = text["chatTranslation2"],
chatTranslationGoogle = text["chatTranslationGoogle"],
loginUserName = text["loginUserName"],
loginPassword = text["loginPassword"],
signupUsername = text["signupUsername"],
signupRegText = text["signupRegText"],
signupTerms1 = text["signupTerms1"],
signupTerms2 = text["signupTerms2"],
signupTerms3 = text["signupTerms3"],
signupPrivacy = text["signupPrivacy"],
signupAge = text["signupAge"],
tutorialTitleFirstRoute = text["tutorialTitleFirstRoute"],
tutorialDescription1 = text["tutorialDescription1"],
tutorialDescription2 = text["tutorialDescription2"],
tutorialTitleSecondRoute = text["tutorialTitleSecondRoute"],
tutorialDescriptionSecondRoute1 = text["tutorialDescriptionSecondRoute1"],
tutorialDescriptionSecondRoute2 = text["tutorialDescriptionSecondRoute2"],
tutorialTitleThirdRoute = text["tutorialTitleThirdRoute"],
tutorialDescriptionThirdRoute1 = text["tutorialDescriptionThirdRoute1"],
tutorialDescriptionThirdRoute2 = text["tutorialDescriptionThirdRoute2"],
footerHome = text["footerHome"],
footerSearch = text["footerSearch"],
footerSell = text["footerSell"],
footerInbox = text["footerInbox"],
footerProfile = text["footerProfile"],
Price = text["Price"],
pFText = text["pFText"],
searchHeaderInput = text["searchHeaderInput"],
seeAllText1 = text["seeAllText1"],
seeAllText2 = text["seeAllText2"],
wardrobeSpotlightHeader = text["wardrobeSpotlightHeader"],
wardrobeSpotlightOPsUsername = text["wardrobeSpotlightOPsUsername"],
wardrobeSpotlightFollowText = text["wardrobeSpotlightFollowText"],
wardrobeSpotlightSeeMore = text["wardrobeSpotlightSeeMore"],
wardrobeSpotlightsizes = text["wardrobeSpotlightsizes"],
homeSearchHeader = text["homeSearchHeader"],
homeSearchHeaderTitleWoman = text["homeSearchHeaderTitleWoman"],
homeSearchHeaderTitleMan = text["homeSearchHeaderTitleMan"],
homeSearchHeaderTitleChildren = text["homeSearchHeaderTitleChildren"],
homeSearchHeaderTitleHome = text["homeSearchHeaderTitleHome"],
homeSearchPopularViewSection = text["homeSearchPopularViewSection"],
homeSearchPopularViewMiniSeeAll = text["homeSearchPopularViewMiniSeeAll"],
homeSearchPopularViewSize = text["homeSearchPopularViewSize"],
homeSearchPopularViewBrand = text["homeSearchPopularViewBrand"],
homeSuggested = text["homeSuggested"],
homeNewsfeed = text["homeNewsfeed"],
inboxMessagesRoutesender = text["inboxMessagesRoutesender"],
inboxMessagesRouteobject = text["inboxMessagesRouteobject"],
inboxMessagesRoutedate = text["inboxMessagesRoutedate"],
inboxNotificationsRoute = text["inboxNotificationsRoute"],
inboxMessages = text["inboxMessages"],
inboxNotifications = text["inboxNotifications"],
ProfileFlyerGuide = text["ProfileFlyerGuide"],
ProfileFlyerFavorite = text["ProfileFlyerFavorite"],
ProfileFlyerPersonalisation = text["ProfileFlyerPersonalisation"],
ProfileFlyerBalance = text["ProfileFlyerBalance"],
ProfileFlyerOrders = text["ProfileFlyerOrders"],
ProfileFlyerDiscount = text["ProfileFlyerDiscount"],
ProfileFlyerForum = text["ProfileFlyerForum"],
ProfileFlyerInviteFriends = text["ProfileFlyerInviteFriends"],
ProfileFlyerHoliday = text["ProfileFlyerHoliday"],
ProfileFlyerSettings = text["ProfileFlyerSettings"],
ProfileFlyerCookies = text["ProfileFlyerCookies"],
ProfileFlyerAbout = text["ProfileFlyerAbout"],
ProfileFlyerLegal = text["ProfileFlyerLegal"],
ProfileFlyerOurPlataform = text["ProfileFlyerOurPlataform"],
ProfileFlyerHelp = text["ProfileFlyerHelp"],
ProfileTermsText1 = text["ProfileTermsText1"],
ProfileTermsText2 = text["ProfileTermsText2"],
ProfileTermsText3 = text["ProfileTermsText3"],
ProfileTermsText4 = text["ProfileTermsText4"],
searchAll = text["searchAll"],
searchWomenClothes = text["searchWomenClothes"],
searchWomenShoes = text["searchWomenShoes"],
searchWomenBags = text["searchWomenBags"],
searchWomenAccessories = text["searchWomenAccessories"],
searchWomenBeauty = text["searchWomenBeauty"],
searchMenTodos = text["searchMenTodos"],
searchMenClothes = text["searchMenClothes"],
searchMenShoes = text["searchMenShoes"],
searchMenAccessories = text["searchMenAccessories"],
searchMenGrooming = text["searchMenGrooming"],
searchKidsAll = text["searchKidsAll"],
searchKidsGirlsClothing = text["searchKidsGirlsClothing"],
searchKidsBoysClothing = text["searchKidsBoysClothing"],
searchKidsToysAndGames = text["searchKidsToysAndGames"],
searchKidsBabyCare = text["searchKidsBabyCare"],
searchKidsBuggies = text["searchKidsBuggies"],
searchKidsRideOnToys = text["searchKidsRideOnToys"],
searchKidsCarSeatsAndChairs = text["searchKidsCarSeatsAndChairs"],
searchKidsKidsFurniture = text["searchKidsKidsFurniture"],
searchKidsSchoolSupplies = text["searchKidsSchoolSupplies"],
searchKidsOtherKidsItems = text["searchKidsOtherKidsItems"],
searchHomeTodos = text["searchHomeTodos"],
searchHomeTextiles = text["searchHomeTextiles"],
searchHomeHomeAccessories = text["searchHomeHomeAccessories"],
searchHomeTableware = text["searchHomeTableware"],
searchHomeBooks = text["searchHomeBooks"],
searchHomeTitle = text["searchHomeTitle"],
searchKidsTitle = text["searchKidsTitle"],
searchMenTitle = text["searchMenTitle"],
searchWomenTitle = text["searchWomenTitle"],
sellPhotoText1 = text["sellPhotoText1"],
sellPhotoText2 = text["sellPhotoText2"],
sellUploadText = text["sellUploadText"],
sellTitleDesc1 = text["sellTitleDesc1"],
sellTitleDesc2 = text["sellTitleDesc2"],
sellTitleDesc3 = text["sellTitleDesc3"],
sellTitleDesc4 = text["sellTitleDesc4"],
sellCategory = text["sellCategory"],
sellBrand = text["sellBrand"],
sellCondition = text["sellCondition"],
sellPrice = text["sellPrice"],
sellInterest = text["sellInterest"],
sellUpload = text["sellUpload"],
sellArticleText1 = text["sellArticleText1"],
sellArticleText2 = text["sellArticleText2"],
sellArticleText3 = text["sellArticleText3"],
sellArticleText4 = text["sellArticleText4"],
sellArticleText5 = text["sellArticleText5"],
sellArticleText6 = text["sellArticleText6"]
)
line_info += '};\n'
line_info += other_language
line_info += 'export { en, pt };'

# f = open("src/i18n/supportedLanguages.js", "r")
# file = f.read()
# file = file.split("const ")
# for object in file:
#   if object == "":
#     continue
#   name = object[0:2]
#   if name == language:
#     lines = object.split("\n")
#     for item in lines:
#       print(item, "line")

f = open("src/i18n/supportedLanguages.js", "w")
f.write(line_info)
f.close()
