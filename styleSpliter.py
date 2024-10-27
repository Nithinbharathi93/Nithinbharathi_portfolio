#0117
##with open("index.txt") as f:
##    r = f.read()
##    stylePart = r.split("<style>")[1:]
##    styleBegin = stylePart[:-1]
##    styleLast = stylePart[-1].split("</style>")[0]
##    styleBegin.append(styleLast)
##
##for i,j in enumerate(styleBegin):
##    with open(f"./css/homecss/homecss{i+1}.css", "w") as f1:
##        addThis = j.split("</style>")
##        f1.write(str(addThis[0]))
##fulStyle = ''.join(styleBegin)
##
##with open("./css/homecss.css", "w") as f2:
##    f2.write(str(fulStyle))
##
##cont = ''.join([r.split("<style>")[0]] + stylePart[-1].split("</style>")[1:])
##with open("index-2.html", "w") as fi:
##    fi.write(cont)

for i in range(1, 17):
    with open(f"./css/homecss/homecss{i}.css") as f:
        if r"</" in f.read(): print(f"Bug ley..!! homecss{i}.css la..")
        else: print("Thapichada..!")
