var models = require('../models');
var express = require('express');
var router = express.Router();

router.get('/',function(req,res){
	//code for retrieving products
	models.Products.findAll().then(function(products){
		res.json({
			products:products
		});
	});
});

router.get('/test',function(req,res){
	var user_obj = {
		email:'info@savio.ca',
		password:'193756'
	}
	models.Users.create(user_obj).then(function(users){
		res.json({
			users:users
		});
	});
})
//newproduct
router.get('/newproduct',function(req,res){
	var newproduct_obj = {
		productId:'np_obj productId',
		name:'np_obj name',
		image:'np_obj image',
		description:'np_obj description',
		category:'np_obj category',
		price:'np_obj price',
		quantity:'np_obj quantity',
		status:'np_obj status'
	}
	models.Users.create(newproduct_obj).then(function(users){
		res.json({
			products:products
		});
	});
})
//retrieve_orders
router.get('/retrieve_orders',function(req,res){
	var retrieve_orders_obj = {
		orderId:'rt_o orderId',
		cart:[cartobject],
		total:'rt_o orderId total',
		tax:'rt_o orderId tax',
		final_total:'rt_o orderId final_total'
	}
	models.Users.create(retrieve_orders_obj).then(function(users){
		res.json({
			products:products
		});
	});
})
//record_order
router.get('/record_order',function(req,res){
	var record_order_obj = {
		orderId:'r_o orderId',
		cart:[cartobject],
		total:'r_o orderId total',
		tax:'r_o orderId tax',
		final_total:'r_o orderId final_total'
	}
	models.Users.create(record_order_obj).then(function(users){
		res.json({
			products:products
		});
	});
})
//retrieve_products
router.get('/retrieve_products',function(req,res){
	var retrieve_products_obj = {
		productId:'rp productId',
		name:'rp name',
		image:'rp image',
		description:'rp description',
		category:'rp category',
		price:'rp price',
		quantity:'rp quantity',
		status:'rp status',
	}
	models.Users.create(retrieve_products_obj).then(function(users){
		res.json({
			products:products
		});
	});
})
//editproduct
router.get('/editproduct',function(req,res){
	var editproduct_obj = {
		email:'info@savio.ca',
		password:'193756'
	}
	models.Users.create(editproduct_obj).then(function(users){
		res.json({
			products:products
		});
	});
})


module.exports = router;