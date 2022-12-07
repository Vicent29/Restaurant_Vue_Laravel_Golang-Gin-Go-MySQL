package Table

import (
	"github.com/gin-gonic/gin"
)

func TableRouting(router *gin.RouterGroup) {
	router.GET("/", GetAllTables)
	router.GET("/:id", GetTableByID)
}