from server import db

class Gift(db.Model):
    __tablename__ = "gifts"

    id = db.Column(db.Integer, primary_key = True)
    name = db.Column(db.String(255))
    image = db.Column(db.String(255))
    price = db.Column(db.Integer)
    description = db.Column(db.String(255))
