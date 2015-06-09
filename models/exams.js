"use strict";
var Sequelize = require('sequelize');
module.exports = function(sequelize) {
  var Exam = sequelize.define("Exam", {
      date_created: { type: Sequelize.STRING, defaultValue: Sequelize.NOW },
      test_date: Sequelize.DATE,
      l_name: Sequelize.STRING,
      m_initial: Sequelize.STRING,
      f_name: Sequelize.STRING,
      ssn: Sequelize.STRING,
      dob: Sequelize.DATE,
      gender: Sequelize.STRING,
      taken_year: Sequelize.STRING,
      hs: Sequelize.STRING,
      taken: Sequelize.BOOLEAN,
      lu1: Sequelize.CHAR(5),
      lu2: Sequelize.CHAR(5),
      lu3: Sequelize.CHAR(5),
      lu4: Sequelize.CHAR(5),
      lu5: Sequelize.CHAR(5),
      lu6: Sequelize.CHAR(5),
      lu7: Sequelize.CHAR(5),
      lu8: Sequelize.CHAR(5),
      lu9: Sequelize.CHAR(5),
      lu10: Sequelize.CHAR(5),
      lu11: Sequelize.CHAR(5),
      lu12: Sequelize.CHAR(5),
      lu13: Sequelize.CHAR(5),
      lu14: Sequelize.CHAR(5),
      lu15: Sequelize.CHAR(5),
      lu16: Sequelize.CHAR(5),
      lu17: Sequelize.CHAR(5),
      lu18: Sequelize.CHAR(5),
      lu19: Sequelize.CHAR(5),
      lu20: Sequelize.CHAR(5),
      lu21: Sequelize.CHAR(5),
      lu22: Sequelize.CHAR(5),
      lu23: Sequelize.CHAR(5),
      lu24: Sequelize.CHAR(5),
      lu25: Sequelize.CHAR(5),
      lu26: Sequelize.CHAR(5),
      lu27: Sequelize.CHAR(5),
      lu28: Sequelize.CHAR(5),
      lu29: Sequelize.CHAR(5),
      lu30: Sequelize.CHAR(5),
      lu31: Sequelize.CHAR(5),
      lu32: Sequelize.CHAR(5),
      lu33: Sequelize.CHAR(5),
      lu34: Sequelize.CHAR(5),
      lu35: Sequelize.CHAR(5),
      ss1: Sequelize.CHAR(5),
      ss2: Sequelize.CHAR(5),
      ss3: Sequelize.CHAR(5),
      ss4: Sequelize.CHAR(5),
      ss5: Sequelize.CHAR(5),
      ss6: Sequelize.CHAR(5),
      ss7: Sequelize.CHAR(5),
      ss8: Sequelize.CHAR(5),
      ss9: Sequelize.CHAR(5),
      ss10: Sequelize.CHAR(5),
      ss11: Sequelize.CHAR(5),
      ss12: Sequelize.CHAR(5),
      ss13: Sequelize.CHAR(5),
      ss14: Sequelize.CHAR(5),
      ss15: Sequelize.CHAR(5),
      ss16: Sequelize.CHAR(5),
      ss17: Sequelize.CHAR(5),
      ss18: Sequelize.CHAR(5),
      ss19: Sequelize.CHAR(5),
      ss20: Sequelize.CHAR(5),
      ss21: Sequelize.CHAR(5),
      ss22: Sequelize.CHAR(5),
      ss23: Sequelize.CHAR(5),
      ss24: Sequelize.CHAR(5),
      ss25: Sequelize.CHAR(5),
      ss26: Sequelize.CHAR(5),
      ss27: Sequelize.CHAR(5),
      ss28: Sequelize.CHAR(5),
      ss29: Sequelize.CHAR(5),
      ss30: Sequelize.CHAR(5),
      ss31: Sequelize.CHAR(5),
      ss32: Sequelize.CHAR(5),
      ss33: Sequelize.CHAR(5),
      ss34: Sequelize.CHAR(5),
      ss35: Sequelize.CHAR(5),
      rs1: Sequelize.CHAR(5),
      rs2: Sequelize.CHAR(5),
      rs3: Sequelize.CHAR(5),
      rs4: Sequelize.CHAR(5),
      rs5: Sequelize.CHAR(5),
      rs6: Sequelize.CHAR(5),
      rs7: Sequelize.CHAR(5),
      rs8: Sequelize.CHAR(5),
      rs9: Sequelize.CHAR(5),
      rs10: Sequelize.CHAR(5),
      rs11: Sequelize.CHAR(5),
      rs12: Sequelize.CHAR(5),
      rs13: Sequelize.CHAR(5),
      rs14: Sequelize.CHAR(5),
      rs15: Sequelize.CHAR(5),
      rs16: Sequelize.CHAR(5),
      rs17: Sequelize.CHAR(5),
      rs18: Sequelize.CHAR(5),
      rs19: Sequelize.CHAR(5),
      rs20: Sequelize.CHAR(5),
      rs21: Sequelize.CHAR(5),
      rs22: Sequelize.CHAR(5),
      rs23: Sequelize.CHAR(5),
      rs24: Sequelize.CHAR(5),
      rs25: Sequelize.CHAR(5),
      rs26: Sequelize.CHAR(5),
      rs27: Sequelize.CHAR(5),
      rs28: Sequelize.CHAR(5),
      rs29: Sequelize.CHAR(5),
      rs30: Sequelize.CHAR(5),
      rs31: Sequelize.CHAR(5),
      rs32: Sequelize.CHAR(5),
      rs33: Sequelize.CHAR(5),
      rs34: Sequelize.CHAR(5),
      rs35: Sequelize.CHAR(5),
      ea1: Sequelize.CHAR(5),
      ea2: Sequelize.CHAR(5),
      ea3: Sequelize.CHAR(5),
      ea4: Sequelize.CHAR(5),
      ea5: Sequelize.CHAR(5),
      ea6: Sequelize.CHAR(5),
      ea7: Sequelize.CHAR(5),
      ea8: Sequelize.CHAR(5),
      ea9: Sequelize.CHAR(5),
      ea10: Sequelize.CHAR(5),
      ea11: Sequelize.CHAR(5),
      ea12: Sequelize.CHAR(5),
      ea13: Sequelize.CHAR(5),
      ea14: Sequelize.CHAR(5),
      ea15: Sequelize.CHAR(5),
      ea16: Sequelize.CHAR(5),
      ea17: Sequelize.CHAR(5),
      ea18: Sequelize.CHAR(5),
      ea19: Sequelize.CHAR(5),
      ea20: Sequelize.CHAR(5),
      ea21: Sequelize.CHAR(5),
      ea22: Sequelize.CHAR(5),
      ea23: Sequelize.CHAR(5),
      ea24: Sequelize.CHAR(5),
      ea25: Sequelize.CHAR(5),
      ea26: Sequelize.CHAR(5),
      ea27: Sequelize.CHAR(5),
      ea28: Sequelize.CHAR(5),
      ea29: Sequelize.CHAR(5),
      ea30: Sequelize.CHAR(5),
      ea31: Sequelize.CHAR(5),
      ea32: Sequelize.CHAR(5),
      ea33: Sequelize.CHAR(5),
      ea34: Sequelize.CHAR(5),
      ea35: Sequelize.CHAR(5),
      a1: Sequelize.CHAR(5),
      a2: Sequelize.CHAR(5),
      a3: Sequelize.CHAR(5),
      a4: Sequelize.CHAR(5),
      a5: Sequelize.CHAR(5),
      a6: Sequelize.CHAR(5),
      a7: Sequelize.CHAR(5),
      a8: Sequelize.CHAR(5),
      a9: Sequelize.CHAR(5),
      a10: Sequelize.CHAR(5),
      a11: Sequelize.CHAR(5),
      a12: Sequelize.CHAR(5),
      a13: Sequelize.CHAR(5),
      a14: Sequelize.CHAR(5),
      a15: Sequelize.CHAR(5),
      a16: Sequelize.CHAR(5),
      a17: Sequelize.CHAR(5),
      a18: Sequelize.CHAR(5),
      a19: Sequelize.CHAR(5),
      a20: Sequelize.CHAR(5),
      a21: Sequelize.CHAR(5),
      a22: Sequelize.CHAR(5),
      a23: Sequelize.CHAR(5),
      a24: Sequelize.CHAR(5),
      a25: Sequelize.CHAR(5),
      a26: Sequelize.CHAR(5),
      a27: Sequelize.CHAR(5),
      a28: Sequelize.CHAR(5),
      a29: Sequelize.CHAR(5),
      a30: Sequelize.CHAR(5),
      a31: Sequelize.CHAR(5),
      a32: Sequelize.CHAR(5),
      a33: Sequelize.CHAR(5),
      a34: Sequelize.CHAR(5),
      a35: Sequelize.CHAR(5),
      overall_grade: Sequelize.STRING,
      overall_percent_score: Sequelize.INTEGER,
      overall_total_score: Sequelize.INTEGER,
      lu_grade: Sequelize.STRING,
      lu_percent_score: Sequelize.INTEGER,
      lu_total_score: Sequelize.INTEGER,
      ss_grade: Sequelize.STRING,
      ss_percent_score: Sequelize.INTEGER,
      ss_total_score: Sequelize.INTEGER,
      rs_grade: Sequelize.STRING,
      rs_percent_score: Sequelize.INTEGER,
      rs_total_score: Sequelize.INTEGER,
      ea_grade: Sequelize.STRING,
      ea_percent_score: Sequelize.INTEGER,
      ea_total_score: Sequelize.INTEGER,
      a_grade: Sequelize.STRING,
      a_percent_score: Sequelize.INTEGER,
      essay_num: Sequelize.STRING,
      accuplacer_total: Sequelize.INTEGER,
      accuplacer_score: Sequelize.INTEGER,
      accuplacer_level: Sequelize.INTEGER,
      writing_sample_level: Sequelize.STRING,
      writing_sample_score: Sequelize.INTEGER,
      math_score: Sequelize.INTEGER,
      faculty_score: Sequelize.INTEGER,
      final_placement_level: Sequelize.STRING,
      a_total_score: Sequelize.INTEGER,
      exam_year: Sequelize.STRING,
      sis_stud_no: Sequelize.STRING,
      sis_full_name: Sequelize.STRING,
      sis_r_date_as_new: Sequelize.DATE
  }, {
    omitNull: true,
    timestamps: false,
    classMethods: {
      associate: function(models) {
        // associations can be defined here
      }
    }
  });
  return Exam;
};