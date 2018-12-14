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

GMT_OFF = '-05:00'      # PDT/MST/GMT-7
@app.route('/form', methods=['GET', 'POST'])
def form():
    form = LoginForm()

    if form.validate_on_submit():
        club_name_add_to_google_calendar = '{}'.format(form.clubname.data)
        room_add_to_google_calendar = '{}'.format(form.room.data)
        facultyadvisor_add_to_google_calendar = '{}'.format(form.facultyadvisor.data)
        clubdescription_add_to_google_calendar = '{}'.format(form.clubdescription.data)
        day_name_add_to_google_calendar = '{}'.format(form.day.data)
        time_name_add_to_google_calendar = '{}'.format(form.time.data)
        # lol = '<h1>The Club Name is {}. The faculty advisor is {}. The day is {}. The time is {}. The room is {}. The club description is {}.'.format(form.clubname.data, form.facultyadvisor.data, form.day.data, form.time.data, form.room.data, form.clubdescription.data)
        EVENT = {
        'summary': 'club_name_add_to_google_calendar',
        'location': room_add_to_google_calendar,
        'description': 'Faculty Advisor: ' + facultyadvisor_add_to_google_calendar + "\n\n" + 'Club Description: ' + clubdescription_add_to_google_calendar,
        'start': {
            'dateTime': '2018-12-14T19:00:00%s' % GMT_OFF
        },
        'end': {
            'dateTime': '2018-12-14T22:00:00%s' % GMT_OFF
        },
        'recurrence': [
            'RULE:FREQ=DAILY;COUNT=2'
        ],
        'attendees': [
            {'email': 'lpage@example.com'},
            {'email': 'sbrin@example.com'},
        ]
        # 'reminders': {
        #     'useDefault': False,
        #     'overrides': [
        #     {'method': 'email', 'minutes': 24 * 60},
        #     {'method': 'popup', 'minutes': 10},
        #     ],
        # },
        }

        e = GCAL.events().insert(calendarId='primary',
                sendNotifications=True, body=EVENT).execute()

        print('''*** %r event added:
            Start: %s
            End:   %s''' % (e['summary'].encode('utf-8'),
                e['start']['dateTime'], e['end']['dateTime']))
    return render_template('form.html', form=form)






if __name__ == '__main__':
    app.run(debug=True)