from flask import Flask, render_template, request

app = Flask(__name__)

@app.route('/')
def home():
    return '''
    <html>
        <head>
            <style>
                body {
                    font-family: Arial, sans-serif;
                    text-align: center;
                    background: linear-gradient(135deg, #6a11cb, #2575fc);
                    color: white;
                    height: 100vh;
                    display: flex;
                    justify-content: center;
                    align-items: center;
                }
                .container {
                    background: white;
                    padding: 20px;
                    border-radius: 10px;
                    color: black;
                    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
                }
                input, select, button {
                    margin: 10px;
                    padding: 10px;
                    font-size: 1rem;
                    border-radius: 5px;
                    border: 1px solid #ccc;
                }
                button {
                    background: #2575fc;
                    color: white;
                    cursor: pointer;
                }
                button:hover {
                    background: #6a11cb;
                }
            </style>
        </head>
        <body>
            <div class="container">
                <h1>Simple Calculator</h1>
                <form action="/calculate" method="post">
                    <input type="number" name="num1" placeholder="Enter first number" required>
                    <select name="operation">
                        <option value="add">+</option>
                        <option value="subtract">-</option>
                        <option value="multiply">*</option>
                        <option value="divide">/</option>
                    </select>
                    <input type="number" name="num2" placeholder="Enter second number" required>
                    <button type="submit">Calculate</button>
                </form>
            </div>
        </body>
    </html>
    '''

@app.route('/calculate', methods=['POST'])
def calculate():
    num1 = float(request.form['num1'])
    num2 = float(request.form['num2'])
    operation = request.form['operation']

    if operation == 'add':
        result = num1 + num2
    elif operation == 'subtract':
        result = num1 - num2
    elif operation == 'multiply':
        result = num1 * num2
    elif operation == 'divide':
        result = num1 / num2 if num2 != 0 else 'Error: Division by zero'
    else:
        result = 'Invalid operation'
    
    return f'<h1>Result: {result}</h1><br><a href="/">Go Back</a>'

if __name__ == '__main__':
    app.run(debug=True)
