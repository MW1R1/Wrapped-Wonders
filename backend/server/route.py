from server.routes.gifts import gifts
from server import app

app.register_blueprint(gifts)