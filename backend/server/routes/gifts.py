from models import Gift
from schemas import GiftSchema
from flask import Blueprint, make_response, jsonify, request
from server import db

gifts = Blueprint("gifts",__name__)

@gifts.route("/gifts", methods = ["GET"])
def get_all_gifts():
    gift_list = Gift.query.all()
    gift_data = GiftSchema(many=True).dump(gift_list)
    return make_response(jsonify(gift_data))

@gifts.route("/gifts/<string:name>", methods = ["GET"])
def get_each_gift(name):
    gift_data = Gift.query.filter_by(name = name).first()
    gift_list = GiftSchema().dump(gift_data)
    return make_response(jsonify(gift_list))

@gifts.route("/gifts/<int:id>", methods = ["DELETE"])
def delete_each_gift(id):
    gift_data = Gift.query.filter_by(id = id).first()
    db.session.delete(gift_data)
    db.session.commit()
    return make_response(jsonify(message = "Deleted Successfully"))

@gifts.route("/gifts", methods = ["POST"])
def add_new_gift():
    gift = GiftSchema().load(request.get_json())
    new_gift = Gift(**gift)
    db.session.add(new_gift)
    db.session.commit()
    return make_response(jsonify(message = "Added Successfully"))

@gifts.route("/gifts/<int:id>", methods = ["PATCH"])
def update_gift(id):
    gift_data = Gift.query.filter_by(id = id).first()
    gift = GiftSchema().load(request.get_json())
    for fields, value in gift.items():
        setattr(gift_data, fields, value)

    db.session.add(gift_data)
    db.session.commit()
    return make_response(jsonify(message = "Updated successfully"))

