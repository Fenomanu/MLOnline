import json
from flask import Flask, jsonify, request
import matplotlib.pyplot as plt
import numpy as np
import pandas as pd
from sklearn.linear_model import LinearRegression
from flask_cors import CORS


app = Flask(__name__)
CORS(app, resources={r"/*": {"origins": "https://www.mdiazpastor.com"}})
#CORS(app)

employees = [
 { 'id': 1, 'name': 'Ashley' },
 { 'id': 2, 'name': 'Kate' },
 { 'id': 3, 'name': 'Joe' }
]
# Download and prepare the data
data_root = "https://github.com/ageron/data/raw/main/"
lifesat = pd.read_csv(data_root + "lifesat/lifesat.csv")
X = lifesat[["GDP per capita (USD)"]].values
y = lifesat[["Life satisfaction"]].values


# Select a linear model
model = LinearRegression()

# Train the model
model.fit(X, y)


nextEmployeeId = 4

@app.route('/', methods=['GET'])
def get_employees():
    return jsonify(employees)

@app.route('/predict/<new_value>', methods=['GET'])
def predict(new_value):
    print(new_value)
    try:
        new_value = float(new_value)
    except ValueError:
        return jsonify({"error": "Invalid input"}), 400
    # Make a prediction for Cyprus
    X_new = [[float(new_value)]]  # Cyprus' GDP per capita in 2020
    res = model.predict(X_new)[0][0] # outputs [[6.30165767]]
    print(res)
    return jsonify(res), 200

if __name__ == '__main__':
   app.run(port=5000)
