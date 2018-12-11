from flask import Flask
from flask import request
 
def login():
	if request.method == 'POST':
		club_name = request.form['club_name_python']
		faculty_advisor = request.form['faculty_advisor_python']
		day = request.form['day_python']
		time = request.form['time_python']
		room = request.form['room_python']
		club_description = request.form['club_description_python']
		
		# code that uses the data you've got
		# in our case, checking if the user exists
		# and logs them in, if not redirect to sign up
	# else:
		# an exception
