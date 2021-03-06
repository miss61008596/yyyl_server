/**
 * Created by zhubg on 2017/4/17.
 */

'use strict';

Object.defineProperty(exports, "__esModule", {
    value: true
});
var typeDefs = exports.typeDefs = '\n\n#\u5206\u9875\u6D88\u606F\ntype PageInfo {\n    endCursor: Int!\n    hasNextPage: Boolean!\n}\n\n#Message\ntype Message {\n    type: String!\n    code: String!\n    content: String!\n}\n\n#\u8F93\u5165\u7C7B\u578B\u5173\u952E\u5B57input\n\ntype Query {\n    getToken(id:ID!): Message!\n    getLotteryRecordList(offset: Int!,count: Int!): Message!\n    getBettingRecordList(offset: Int!,count: Int!): Message!\n    getUserList(offset: Int!,count: Int!): Message!\n    getPointAddAndSubtractRecordList(offset: Int!,count: Int!): Message!\n    insertPointAddAndSubtractRecord(additionPoints: Int!,user_fid: String!): Message!\n    updateApprovalFlagByID(approvalFlag: String!,ID: String!,additionPoints: Int!): Message!\n}\n\nschema {\n  query: Query\n}\n\n';