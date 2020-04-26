from datetime import datetime
from bluepy.btle import Scanner

dateTimeObj = datetime.now() #determines timestamp for filename
	
filename = dateTimeObj.strftime("%d_%H:%M") #string for the filename (day hour:minute)
f = open(str(filename) + ".txt", "w") #creates a file
f.close()

while True:
	scanner = Scanner()
	devices = scanner.scan(1.0) #scans for one second
	
	dateTimeObj = datetime.now() #determines timestamp
	
	for device in devices: #loop over all detected devices
		
		distance = (-3.55889 * device.rssi -121.75286)/100 #transforms RSSI into meters
		
		if distance < 1: #not enough distance!
			timestamp = dateTimeObj.strftime("%Y/%b/%d %H:%M:%S.%f") #timestamp strink
			output = {timestamp : distance} #dictionary with timestamp and distance
			
			f = open(str(filename) + ".txt", "a") #opens file
			f.write(str(output) + '\n') #appends string to file
			f.close()
			
			print(output) #prints dictionary written to file
		
		else: #safe distance
			pass
