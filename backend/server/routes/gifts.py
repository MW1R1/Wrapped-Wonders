from models import Gift
from schemas import GiftSchema
from flask import Blueprint, make_response, jsonify

gifts = Blueprint("gifts",__name__)

@gifts.route("/gifts", methods = ["GET"])
def get_all_gifts():
    gift_list = Gift.query.all()
    gift_data = GiftSchema().dump(gift_list)
    return make_response(jsonify(gift_data))