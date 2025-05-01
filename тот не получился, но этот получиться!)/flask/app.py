from flask import Flask, render_template, request, redirect, url_for
from werkzeug.utils import secure_filename
import os

app = Flask(__name__)
app.config['UPLOAD_FOLDER'] = 'static/uploads'  # Путь для сохранения аватарок

# Убедимся, что папка для загрузок существует
os.makedirs(app.config['UPLOAD_FOLDER'], exist_ok=True)

# Данные для поиска (название страницы -> URL)
data = {
    "Атака Титанов": "/manga-main/attack-on-titan.html",
    "Блич": "/bleach",  # изменено на правильный путь
    "Ковбой Бибоп": "/manga-main/cowboy-bebop.html",
    "Берсерк": "/manga-main/berserk.html",
    "Кайдзю №8": "/manga-main/kaiju-8.html"
}

# Временное хранилище пользователей
users = {
    # Пример: "user1": {"password": "password123", "avatar": "/static/uploads/user1.png"}
}


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
        avatar = request.files.get("avatar")

        if username in users:
            return "Пользователь уже существует!"

        avatar_url = None
        if avatar and avatar.filename != "":  # Проверяем, что файл загружен
            # Используем безопасное имя файла
            avatar_filename = secure_filename(f"{username}_{avatar.filename}")
            avatar_path = os.path.join(app.config['UPLOAD_FOLDER'], avatar_filename)

            # Сохраняем файл
            avatar.save(avatar_path)
            print(f"File saved at: {avatar_path}")  # Отладочный вывод

            avatar_url = f"/static/uploads/{avatar_filename}"
            print(f"Avatar URL: {avatar_url}")  # Отладочный вывод

        # Сохраняем данные пользователя
        users[username] = {"password": password, "avatar": avatar_url}
        print(users)  # Отладочный вывод

        return redirect(url_for("login"))
    return render_template("main-account/register.html")

@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        username = request.form.get("username")
        password = request.form.get("password")

        user = users.get(username)
        if user and user["password"] == password:
            return redirect(url_for("user_profile", username=username))
        return "Неверный логин или пароль!"
    return render_template("main-account/login.html")


@app.route("/bleach")
def bleach():
    return render_template("bleach/bleach.html")


@app.route("/kaiju8")
def kaiju8():
    return render_template("кайдзю №8/кайдзю №8.html")


@app.route("/user/<username>")
def user_profile(username):
    user = users.get(username)
    if not user:
        return "Пользователь не найден", 404

    # Передача username и avatar в шаблон
    return render_template("main-account/profile.html", username=username, avatar=user.get("avatar"))


if __name__ == "__main__":
    app.run(debug=True)