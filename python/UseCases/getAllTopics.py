#https://www.linkedin.com/directory/topics-[more - z]/
import csv
import requests
import time
from lxml import html
import string
baseURL = "https://www.linkedin.com/directory/topics-"
path = r"C:\Users\estasney\Google Drive\Cisco\LI Profiles\Extracts\all_topics.csv"
csvFile = open(path, 'w+', encoding='utf-8', newline='')
outputWriter = csv.writer(csvFile, dialect='excel')
outputWriter.writerow(['Topic', 'Link'])

#Pull text and link

print("Commencing program...")


# Create a list of letters A-Z. Manually add "More"
alpha = list(string.ascii_lowercase)
alpha.append('more')
counter = 0
counterEnd = len(alpha)
while counter < counterEnd:
    targetURL = baseURL + str(alpha[counter]) + "/"
    print("Opening " + targetURL)
    page = requests.get(targetURL)
    parPage = html.fromstring(page.content)
    topicCount = parPage.xpath("//li[@class='content']")
    topicText = parPage.xpath("*//li[@class='content']/a/text()")
    topicLink = parPage.xpath("*//li[@class='content']/a/@href")
    print("Parse complete")
    n = 0
    time.sleep(11)
    print("Sleep Complete")
    while n < len(topicCount):
        topics = topicText[n]
        link = topicLink[n]
        outputWriter.writerow([topics, link])
        n += 1
    counter += 1


