#https://www.linkedin.com/directory/title-companies-c-54-[31-88]/
import csv
import requests
import time
from lxml import html
baseURL = "https://www.linkedin.com/directory/title-companies-c-54-"
path = r"C:\Users\estasney\Google Drive\Cisco\LI Profiles\Extracts\cisco_titles.csv"
csvFile = open(path, 'w+', encoding='utf-8', newline='')
outputWriter = csv.writer(csvFile, dialect='excel')
outputWriter.writerow(['Title', 'Link'])

#Pull text and link

print("Commencing program...")
#page = requests.get(baseURL)
#parPage = html.fromstring(page.content)
#cityMatch = parPage.xpath("//li[@class='content']/a/@href")

# set a counter for iterating over the range of Cisco job titles that was found manually
pageStart = 31
pageEnd = 88
y = pageStart
while y <= pageEnd:
    targetURL = baseURL + str(y) + "/"
    print("Opening " + targetURL)
    page = requests.get(targetURL)
    parPage = html.fromstring(page.content)
    jobTitle = parPage.xpath("//li[@class='content']/a/text()")
    titleLink = parPage.xpath("//li[@class='content']/a/@href")
    print("Parse complete")
    n = 0
    time.sleep(11)
    print("Sleep Complete")
    while n < len(jobTitle):
        title = jobTitle[n]
        link = titleLink[n]
        outputWriter.writerow([title, link])
        n += 1
    y += 1


