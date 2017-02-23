#https://www.linkedin.com/directory/companies-computer-networking/
import csv
import requests
import time
from lxml import html
baseURL = "https://www.linkedin.com/directory/companies-computer-networking/"
path = r"put path here"
csvFile = open(path, 'w+', encoding='utf-8', newline='')
outputWriter = csv.writer(csvFile, dialect='excel')
outputWriter.writerow(['Company', 'Link'])

#get list of available citires after choosing an industry

print("Opening " + baseURL)
page = requests.get(baseURL)
parPage = html.fromstring(page.content)
cityMatch = parPage.xpath("//li[@class='content']/a/@href")

# set a counter for iterating over available cities
y = 0
while y <= 99:
    targetURL = cityMatch[y]
    print("Opening " + str(cityMatch[y]))
    pageY = requests.get(str(cityMatch[y]))
    parPageY = html.fromstring(pageY.content)
    companies = parPageY.xpath("//li[@class='content']/a/text()")
    companyLink = parPageY.xpath("//li[@class='content']/a/@href")
    print("Parse complete")
    n = 0
    time.sleep(11)
    print("Sleep Complete")
    outputWriter.writerow([str(cityMatch[y]), "New Section"])
    while n < len(companyLink):
        company = companies[n]
        link = companyLink[n]
        outputWriter.writerow([companies[n], link])
        n += 1
    y += 1


