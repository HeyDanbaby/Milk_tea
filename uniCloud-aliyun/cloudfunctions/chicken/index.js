'use strict';
const db = uniCloud.database();
exports.main = async (event, context) => {
	let {
		id,
		name
	} = event
	let res = await db.collection('goods').add({
		id,
		name
	})
	//返回数据给客户端
	return res
};