let baseUrl = "http://116.62.149.153:7001/client/";
let apiUrl = {
    teacher: baseUrl + "teachers",
    introduce: baseUrl + "introduction",
    inform: baseUrl + "informs",
    project: baseUrl + "peojects",
    live: baseUrl + "lives",
    member: baseUrl + "members",
    leader: baseUrl + "leadInspections",
    leaderId: baseUrl + "leadInspection?id=",
    memberPage: baseUrl + "member/page",
    memberTeach: baseUrl + "member/teach",
    price: baseUrl + "awards",
    resume: baseUrl + "resume"
}
export default apiUrl;