package com.yc.bean;

import java.io.Serializable;
import java.util.Date;
/* 创建新表 "engage_interview"。                                                                   */
/* "engage_interview" : 面试表                                                                   */
/* 	"ein_id" : 主键，自动增长列                                                                       */
/* 	"human_name" : 姓名                                                                         */
/* 	"interview_amount" : 面试次数                                                                 */
/* 	"human_major_kind_id" : 职位分类编号                                                            */
/* 	"human_major_kind_name" : 职位分类名称                                                          */
/* 	"human_major_id" : 职位编号                                                                   */
/* 	"human_major_name" : 职位名称                                                                 */
/* 	"image_degree" : 形象等级                                                                     */
/* 	"native_language_degree" : 口才等级                                                           */
/* 	"foreign_language_degree" : 外语水平等级                                                        */
/* 	"response_speed_degree" : 应变能力                                                            */
/* 	"EQ_degree" : EQ等级                                                                        */
/* 	"IQ_degree" : IQ_等级                                                                       */
/* 	"multi_quality_degree" : 综合素质                                                             */
/* 	"register" : 面试人                                                                          */
/* 	"checker" : 筛选人                                                                           */
/* 	"registe_time" : 面试时间                                                                     */
/* 	"check_time" : 筛选时间                                                                       */
/* 	"resume_id" : 简历编号                                                                        */
/* 	"result" : 面试结果                                                                           */
/* 	"interview_comment" : 面试评价                                                                */
/* 	"check_comment" : 筛选评价                                                                    */
/* 	"interview_status" : 面试状态                                                                 */
/* 	"check_status" : 筛选状态                                                                     */  
public class EngageInterview implements Serializable {
	/**
	 * 
	 */
	private static final long serialVersionUID = -4117455717674059170L;
	private int ein_id;
	private String human_name;
	private int interview_amount;
	private String human_major_kind_id;
	private String human_major_kind_name;
	private String human_major_id;
	private String human_major_name;
	private String image_degree;
	private String native_language_degree;
	private String foreign_language_degree;
	private String response_speed_degree;
	private String EQ_degree;
	private String IQ_degree;
	private String multi_quality_degree;
	private String register;
	private String checker;
	private Date registe_time;
	private Date check_time;
	private int resume_id;
	private String result;
	private String interview_comment;
	private String check_comment;
	private int interview_status;
	private int check_status;
}
