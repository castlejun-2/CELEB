'use strict';

const express = require('express');
const router = express.Router();

const userController = require('./user.controller');
const inquiryController = require('./inquiry.controller');
const storeController = require('./store.controller');
const reviewController = require('./review.controller');
//Page Info Router
router.get('/', userController.output.main); //메인화면 페이지 요청
router.get('/login', userController.output.login); //로그인 페이지 요청
//User Info Router
router.post('/login', userController.process.login); //로그인
router.post('/logout', userController.process.logout); //로그아웃
router.post('/register', userController.process.register); //회원가입
router.get('/mypage', userController.output.myPage); //마이페이지 조회
//Store Info Router
router.get('/store/:storeId', storeController.output.storePage); //마이페이지 조회

router.post('/inquiry/:storeId/:productId', inquiryController.process.inquiry); //문의 생성
router.get('/inquiry/:storeId', inquiryController.output.inquiry); //스토어별 문의 내용 조회 → 수신/발신 체크

module.exports = router;
