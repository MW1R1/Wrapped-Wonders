from marshmallow import fields, Schema

class GiftSchema(Schema):
    id = fields.Integer()
    name = fields.String()
    image = fields.String()
    price = fields.Integer()
    description = fields.String()