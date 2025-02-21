from flask import Flask, render_template, request

app = Flask(__name__)

data = ["Flask", "Python", "Web", "Backend", "API"]  # Данные для поиска

@app.route("/", methods=["GET", "POST"])
def home():
    query = request.form.get("search")  # Получаем текст из input
    results = [item for item in data if query and query.lower() in item.lower()] if query else data
    return render_template("index.html", results=results)

if __name__ == "__main__":
    app.run(debug=True)
