from __future__ import print_function
from flask import Flask, render_template
from flask_wtf import FlaskForm
from wtforms import StringField, PasswordField, TextField
# Source: http://wescpy.blogspot.com/2015/09/creating-events-in-google-calendar.html
from apiclient import discovery
from httplib2 import Http
from oauth2client import file, client, tools

SCOPES = 'https://www.googleapis.com/auth/calendar'
store = file.Storage('../../python/storage.json')
creds = store.get()
if not creds or creds.invalid:
    flow = client.flow_from_clientsecrets('../../python/client_secret.json', SCOPES)
    creds = tools.run_flow(flow, store)
GCAL = discovery.build('calendar', 'v3', http=creds.authorize(Http()))

app = Flask(__name__)
app.config['SECRET_KEY'] = 'Thisisasecret!'

class LoginForm(FlaskForm):
    username = StringField('username')
    password = PasswordField('password')
    clubname = StringField('clubname')
    facultyadvisor = StringField('facultyadvisor')
    day = StringField('day')
    time = StringField('time')
    room = StringField('room')
    clubdescription = StringField('clubdescription')

@app.route('/form', methods=['GET', 'POST'])
def form():
    form = LoginForm()

    if form.validate_on_submit():
        return '<h1>The Club Name is {}. The faculty advisor is {}. The day is {}. The time is {}. The room is {}. The club description is {}.'.format(form.clubname.data, form.facultyadvisor.data, form.day.data, form.time.data, form.room.data, form.clubdescription.data)
    return render_template('form.html', form=form)

GMT_OFF = '-05:00'      # PDT/MST/GMT-7
EVENT = {
    'summary': 'The Club Name is {}. The faculty advisor is {}. The day is {}. The time is {}. The room is {}. The club description is {}.'.format(form.clubname.data, form.facultyadvisor.data, form.day.data, form.time.data, form.room.data, form.clubdescription.data),
    'start':  {'dateTime': '2018-12-11T19:00:00%s' % GMT_OFF},
    'end':    {'dateTime': '2018-12-11T22:00:00%s' % GMT_OFF},
    'attendees': [
        {'email': 'friend1@example.com'},
        {'email': 'friend2@example.com'},
    ],
}

e = GCAL.events().insert(calendarId='primary',
        sendNotifications=True, body=EVENT).execute()

print('''*** %r event added:
    Start: %s
    End:   %s''' % (e['summary'].encode('utf-8'),
        e['start']['dateTime'], e['end']['dateTime']))

if __name__ == '__main__':
    app.run(debug=True)