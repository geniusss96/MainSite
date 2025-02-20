from flask import Flask, render_template

app = Flask(__name__)

@app.route("/")
def home():
    return render_template("index.html")  # Загружаем HTML-шаблон
    return render_template("style.css")  # Загружаем HTML-шаблон

if __name__ == "__main__":
    app.run(debug=True)
