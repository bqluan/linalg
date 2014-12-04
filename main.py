from flask import Flask, url_for, redirect
import logging

# logging.basicConfig(filename='logs/all.log', format='%(asctime)s - %(message)s', level=logging.DEBUG)

app = Flask(__name__)

@app.route("/")
def index():
  return redirect(url_for('static', filename='index.html'))

if __name__ == "__main__":
  app.run()
