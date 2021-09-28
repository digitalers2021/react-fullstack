from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)

CORS(app)


data = ["frutas", "milanesas", "agua 1lt", "coca cola 1lt", "hamburguesas"]

@app.route("/")
def hello_world():
    return "hola mundo"

@app.route("/api")
def api():
    to_search = request.args.get('search')
    if to_search:
        for d in data:
            if d.startswith(to_search):
                return jsonify([d])
        
        return jsonify([])
        

    return jsonify(data)

if __name__ == "__main__":
    app.run()
