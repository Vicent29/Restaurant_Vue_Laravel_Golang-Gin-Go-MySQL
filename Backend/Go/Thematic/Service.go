package Thematic

import (
	"github.com/gin-gonic/gin"
)

func GetAllThematicsService(c *gin.Context) []ThematicModel {
	return GetAllThematicsRepo(c)
}

func GetOneThematicService(id int, c *gin.Context) (ThematicModel, error) {
	return GetOneThematicRepo(id, c)
}
