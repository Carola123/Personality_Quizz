from bottle import route, run, get
from sys import argv
import bottle as b


@route('/')
def index():
    return b.template('quizz.html')


@get('/js/<filename:re:.*\.js>')
def javascript(filename):
    return b.static_file(filename, root='js')


@get('/css/<filename:re:.*\.css>')
def stylesheets(filename):
    return b.static_file(filename, root='css')


@get('/image/<filename:re:.*\.jpg>')
def images(filename):
    return b.static_file(filename, root='image')


def main():
    b.run(host='0.0.0.0', port=argv[1])


if __name__ == '__main__':
    main()
