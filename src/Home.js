const HomaePage = () => {
    return tokenAvailable ? ( <div>
        <MyNavBar />
        This IS HOME!
    </div> ) :
        (<div>
            <h1>
                You need Logintoken to view this page! 
            </h1>
            </div>);
}
 
export default HomaePage;