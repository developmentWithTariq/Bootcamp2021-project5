"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const AWS = require('aws-sdk');
const docClient = new AWS.DynamoDB.DocumentClient();
async function deleteTodo(todoId) {
    const params = {
        TableName: process.env.TODOS_TABLE,
        Key: {
            id: todoId
        },
    };
    try {
        const data = await docClient(params).promise();
        return data.Items;
    }
    catch (err) {
        console.log("Dynamodb error : ", err);
        return null;
    }
}
exports.default = deleteTodo;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiZGVsZXRlVG9kby5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImRlbGV0ZVRvZG8udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSxNQUFNLEdBQUcsR0FBRyxPQUFPLENBQUMsU0FBUyxDQUFDLENBQUM7QUFDL0IsTUFBTSxTQUFTLEdBQUcsSUFBSSxHQUFHLENBQUMsUUFBUSxDQUFDLGNBQWMsRUFBRSxDQUFDO0FBR3BELEtBQUssVUFBVSxVQUFVLENBQUMsTUFBYTtJQUVuQyxNQUFNLE1BQU0sR0FBRztRQUNYLFNBQVMsRUFBRyxPQUFPLENBQUMsR0FBRyxDQUFDLFdBQVc7UUFDbkMsR0FBRyxFQUFDO1lBQ0EsRUFBRSxFQUFHLE1BQU07U0FDZDtLQUNKLENBQUM7SUFFRixJQUFJO1FBQ0EsTUFBTSxJQUFJLEdBQUcsTUFBTSxTQUFTLENBQUMsTUFBTSxDQUFDLENBQUMsT0FBTyxFQUFFLENBQUE7UUFDOUMsT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDO0tBQ3JCO0lBQUEsT0FBTSxHQUFHLEVBQUU7UUFDUixPQUFPLENBQUMsR0FBRyxDQUFDLG1CQUFtQixFQUFFLEdBQUcsQ0FBQyxDQUFDO1FBQ3RDLE9BQU8sSUFBSSxDQUFDO0tBQ2Y7QUFFTCxDQUFDO0FBQ0Qsa0JBQWUsVUFBVSxDQUFDIiwic291cmNlc0NvbnRlbnQiOlsiY29uc3QgQVdTID0gcmVxdWlyZSgnYXdzLXNkaycpO1xuY29uc3QgZG9jQ2xpZW50ID0gbmV3IEFXUy5EeW5hbW9EQi5Eb2N1bWVudENsaWVudCgpO1xuXG5cbmFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRvZG8odG9kb0lkOnN0cmluZykge1xuXG4gICAgY29uc3QgcGFyYW1zID0ge1xuICAgICAgICBUYWJsZU5hbWUgOiBwcm9jZXNzLmVudi5UT0RPU19UQUJMRSxcbiAgICAgICAgS2V5OntcbiAgICAgICAgICAgIGlkIDogdG9kb0lkXG4gICAgICAgIH0sXG4gICAgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBkb2NDbGllbnQocGFyYW1zKS5wcm9taXNlKClcbiAgICAgICAgcmV0dXJuIGRhdGEuSXRlbXM7XG4gICAgfWNhdGNoKGVycikge1xuICAgICAgICBjb25zb2xlLmxvZyhcIkR5bmFtb2RiIGVycm9yIDogXCIsIGVycik7XG4gICAgICAgIHJldHVybiBudWxsO1xuICAgIH1cbiAgICBcbn1cbmV4cG9ydCBkZWZhdWx0IGRlbGV0ZVRvZG87Il19