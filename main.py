from flask import Flask, url_for, redirect, request
import json
import logging
import numpy

app = Flask(__name__)

@app.route('/')
def index():
  return redirect(url_for('static', filename='index.html'))

@app.route('/solution')
def solution():
  linalg = json.loads(request.args.get('linalg'))
  A = numpy.array(linalg['A'])
  b = numpy.array(linalg['b'])
  solution = numpy.linalg.solve(A, b).tolist()
  return json.dumps(solution)

if __name__ == "__main__":
  app.run()
