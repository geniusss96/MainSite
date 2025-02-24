from flask import Flask, render_template, request, redirect, url_for

app = Flask(__name__)

# Данные для поиска (название страницы -> URL)
data = {
    "Атака Титанов": "/manga-main/attack-on-titan.html",
    "Блич": "/manga-main/bleach.html",
    "Ковбой Бибоп": "/manga-main/cowboy-bebop.html",
    "Берсерк": "/manga-main/berserk.html",
    "Кайдзю №8": "/manga-main/kaiju-8.html"
}

users = {}  # Временное хранилище пользователей (в будущем можно использовать БД)

@app.route("/", methods=["GET", "POST"])
def home():
    query = request.form.get("search", "").strip()
    results = {key: value for key, value in data.items() if query.lower() in key.lower()} if query else {}

    if request.method == "POST":
        return "\n".join(f'<li><a href="{link}">{title}</a></li>' for title, link in results.items())

    return render_template("index.html", results=results, query=query)

@app.route("/register", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        if username in users:
            return "Пользователь уже существует!"
        users[username] = password
        return redirect(url_for("login"))
    return render_template("register.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")
        if username in users and users[username] == password:
            return "Успешный вход!"
        return "Неверный логин или пароль!"
    return render_template("login.html")

if __name__ == "__main__":
    app.run(debug=True)
