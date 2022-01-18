# coding: utf-8

from __future__ import absolute_import
from datetime import date, datetime  # noqa: F401

from typing import List, Dict  # noqa: F401

from src.models.base_model_ import Model
from src import util


class AnnotationsInner(Model):
    """NOTE: This class is auto generated by the swagger code generator program.

    Do not edit the class manually.
    """
    def __init__(self, box: object=None, class_id: int=None, score: int=None):  # noqa: E501
        """AnnotationsInner - a model defined in Swagger

        :param box: The box of this AnnotationsInner.  # noqa: E501
        :type box: object
        :param class_id: The class_id of this AnnotationsInner.  # noqa: E501
        :type class_id: int
        :param score: The score of this AnnotationsInner.  # noqa: E501
        :type score: int
        """
        self.swagger_types = {
            'box': object,
            'class_id': int,
            'score': int
        }

        self.attribute_map = {
            'box': 'box',
            'class_id': 'class_id',
            'score': 'score'
        }
        self._box = box
        self._class_id = class_id
        self._score = score

    @classmethod
    def from_dict(cls, dikt) -> 'AnnotationsInner':
        """Returns the dict as a model

        :param dikt: A dict.
        :type: dict
        :return: The Annotations_inner of this AnnotationsInner.  # noqa: E501
        :rtype: AnnotationsInner
        """
        return util.deserialize_model(dikt, cls)

    @property
    def box(self) -> object:
        """Gets the box of this AnnotationsInner.


        :return: The box of this AnnotationsInner.
        :rtype: object
        """
        return self._box

    @box.setter
    def box(self, box: object):
        """Sets the box of this AnnotationsInner.


        :param box: The box of this AnnotationsInner.
        :type box: object
        """

        self._box = box

    @property
    def class_id(self) -> int:
        """Gets the class_id of this AnnotationsInner.


        :return: The class_id of this AnnotationsInner.
        :rtype: int
        """
        return self._class_id

    @class_id.setter
    def class_id(self, class_id: int):
        """Sets the class_id of this AnnotationsInner.


        :param class_id: The class_id of this AnnotationsInner.
        :type class_id: int
        """

        self._class_id = class_id

    @property
    def score(self) -> int:
        """Gets the score of this AnnotationsInner.


        :return: The score of this AnnotationsInner.
        :rtype: int
        """
        return self._score

    @score.setter
    def score(self, score: int):
        """Sets the score of this AnnotationsInner.


        :param score: The score of this AnnotationsInner.
        :type score: int
        """

        self._score = score