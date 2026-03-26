from collective.editablemenu import logger
from plone import api
from plone.base.utils import get_installer

default_profile = "profile-collective.expandcollapse.tile:default"


def to_2000(context):
    setup_tool = api.portal.get_tool("portal_setup")
    setup_tool.runAllImportStepsFromProfile(
        "profile-collective.expandcollapse.tile:to_2000"
    )
    setup_tool.runImportStepFromProfile(default_profile, "plone.app.registry")
    logger.info("Plone 6 compatibility")
