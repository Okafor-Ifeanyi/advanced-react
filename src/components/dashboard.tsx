export const AdminComponent = () => {
    return (
        <>
            <section className="first-row">
                <article className="title">
                    <h1>Roles</h1>
                    <cite>List of Roles</cite>
                </article>
                <button className="top-button">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 18v-.8q0-.85.425-1.562T3.6 14.55q1.425-.725 2.963-1.15t3.137-.425q.35 0 .55.313t.075.662q-.15.525-.225 1.05t-.075 1.075q0 .725.15 1.4T10.6 18.8q.2.425-.037.813T9.9 20H4q-.825 0-1.412-.587T2 18m15 0q.825 0 1.413-.587T19 16t-.587-1.412T17 14t-1.412.588T15 16t.588 1.413T17 18m-7-6q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m5.85 8.2l-.15-.7q-.3-.125-.562-.262T14.6 18.9l-.725.225q-.325.1-.637-.025t-.488-.4l-.2-.35q-.175-.3-.125-.65t.325-.575l.55-.475q-.05-.35-.05-.65t.05-.65l-.55-.475q-.275-.225-.325-.563t.125-.637l.225-.375q.175-.275.475-.4t.625-.025l.725.225q.275-.2.538-.338t.562-.262l.15-.725q.075-.35.338-.562T16.8 11h.4q.35 0 .613.225t.337.575l.15.7q.3.125.562.275t.538.375l.675-.225q.35-.125.675 0t.5.425l.2.35q.175.3.125.65t-.325.575l-.55.475q.05.3.05.625t-.05.625l.55.475q.275.225.325.563t-.125.637l-.225.375q-.175.275-.475.4t-.625.025L19.4 18.9q-.275.2-.538.337t-.562.263l-.15.725q-.075.35-.337.563T17.2 21h-.4q-.35 0-.612-.225t-.338-.575"/></svg>
                    <p>Manage Roles</p>
                </button>
            </section>
            <section className="second-row">
                <div className="table-container">
                    <div className="table-header">
                        <span>Name</span>
                        <span>Description</span>
                        <span>User Count</span>
                        <span>Actions</span>
                    </div>
                    <div className="table-row">
                        <span>Viewer</span>
                        <span>Customers who window shop</span>
                        <span>52 Users</span>
                        <span className="actions">
                            <button>Edit</button>
                            <button>Delete</button>
                        </span>
                    </div>
                    <div className="table-row">
                        <span>Editor</span>
                        <span>Creatives who have a piece to add</span>
                        <span>8 Users</span>
                        <span className="actions">
                            <button>Edit</button>
                            <button>Delete</button>
                        </span>
                    </div>
                    <div className="table-row">
                        <span>Admin</span>
                        <span>user allows you to edit roles</span>
                        <span>2 Users</span>
                        <span className="actions">
                            <button>Edit</button>
                            <button>Delete</button>
                        </span>
                    </div>
                </div>
                
                <button className="bottom-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M2 18v-.8q0-.85.425-1.562T3.6 14.55q1.425-.725 2.963-1.15t3.137-.425q.35 0 .55.313t.075.662q-.15.525-.225 1.05t-.075 1.075q0 .725.15 1.4T10.6 18.8q.2.425-.037.813T9.9 20H4q-.825 0-1.412-.587T2 18m15 0q.825 0 1.413-.587T19 16t-.587-1.412T17 14t-1.412.588T15 16t.588 1.413T17 18m-7-6q-1.65 0-2.825-1.175T6 8t1.175-2.825T10 4t2.825 1.175T14 8t-1.175 2.825T10 12m5.85 8.2l-.15-.7q-.3-.125-.562-.262T14.6 18.9l-.725.225q-.325.1-.637-.025t-.488-.4l-.2-.35q-.175-.3-.125-.65t.325-.575l.55-.475q-.05-.35-.05-.65t.05-.65l-.55-.475q-.275-.225-.325-.563t.125-.637l.225-.375q.175-.275.475-.4t.625-.025l.725.225q.275-.2.538-.338t.562-.262l.15-.725q.075-.35.338-.562T16.8 11h.4q.35 0 .613.225t.337.575l.15.7q.3.125.562.275t.538.375l.675-.225q.35-.125.675 0t.5.425l.2.35q.175.3.125.65t-.325.575l-.55.475q.05.3.05.625t-.05.625l.55.475q.275.225.325.563t-.125.637l-.225.375q-.175.275-.475.4t-.625.025L19.4 18.9q-.275.2-.538.337t-.562.263l-.15.725q-.075.35-.337.563T17.2 21h-.4q-.35 0-.612-.225t-.338-.575"/></svg>
                    <p>Manage Roles</p>
                </button>
            </section>
        </>
    );
}

export const EditorComponent = () => {
    return (
        <>
            <section className="first-row-2">
                <h1> Select Panel</h1>
                <div className="editor-panel">
                    <button className="editor-button">
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28"><path fill="currentColor" d="M6.75 3A3.75 3.75 0 0 0 3 6.75v14.5A3.75 3.75 0 0 0 6.75 25h14.5A3.75 3.75 0 0 0 25 21.25V6.75A3.75 3.75 0 0 0 21.25 3zM4.5 6.75A2.25 2.25 0 0 1 6.75 4.5h14.5a2.25 2.25 0 0 1 2.25 2.25v14.5a2.25 2.25 0 0 1-2.25 2.25H6.75a2.25 2.25 0 0 1-2.25-2.25zM6 9a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v2a2 2 0 0 1-2 2H8a2 2 0 0 1-2-2zm2-.5a.5.5 0 0 0-.5.5v2a.5.5 0 0 0 .5.5h12a.5.5 0 0 0 .5-.5V9a.5.5 0 0 0-.5-.5zm-2 7.25a.75.75 0 0 1 .75-.75h5.5a.75.75 0 0 1 0 1.5h-5.5a.75.75 0 0 1-.75-.75m.75 3a.75.75 0 0 0 0 1.5h5.5a.75.75 0 0 0 0-1.5zm8.75-2.5c0-.966.784-1.75 1.75-1.75h3c.966 0 1.75.784 1.75 1.75v3A1.75 1.75 0 0 1 20.25 21h-3a1.75 1.75 0 0 1-1.75-1.75zm1.75-.25a.25.25 0 0 0-.25.25v3c0 .138.112.25.25.25h3a.25.25 0 0 0 .25-.25v-3a.25.25 0 0 0-.25-.25z"/></svg>
                        <h2>Content Editor</h2>
                    </button>

                    <button className="editor-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25"/><path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6m0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4"/></svg>
                        <h2>View Content</h2>
                    </button>

                    <button className="editor-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
                        <h2>Search Content</h2>
                    </button>

                    <button className="editor-button">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M5 23V1h14v22zm2-3v1h10v-1zm0-2h10V6H7zm5-2l-4-4l1.4-1.4l1.6 1.55V8h2v4.15l1.6-1.55L16 12zM7 4h10V3H7zm0 0V3zm0 16v1z"/></svg>
                        <h2>Update Content</h2>
                    </button>
                </div>
            </section>
        </>
    );
}

export const ViewerComponent = () => {
    return (
        <>
            <section className="first-row-3">
                <h1> Select Panel</h1>
                <div className="editor-panel-1">
                    

                    <button className="editor-button-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="32" height="32" viewBox="0 0 32 32"><path fill="currentColor" d="M30.94 15.66A16.69 16.69 0 0 0 16 5A16.69 16.69 0 0 0 1.06 15.66a1 1 0 0 0 0 .68A16.69 16.69 0 0 0 16 27a16.69 16.69 0 0 0 14.94-10.66a1 1 0 0 0 0-.68M16 25c-5.3 0-10.9-3.93-12.93-9C5.1 10.93 10.7 7 16 7s10.9 3.93 12.93 9C26.9 21.07 21.3 25 16 25"/><path fill="currentColor" d="M16 10a6 6 0 1 0 6 6a6 6 0 0 0-6-6m0 10a4 4 0 1 1 4-4a4 4 0 0 1-4 4"/></svg>
                        <h2>View Content</h2>
                    </button>

                    <button className="editor-button-1">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24"><path fill="currentColor" d="M15.5 14h-.79l-.28-.27A6.47 6.47 0 0 0 16 9.5A6.5 6.5 0 1 0 9.5 16c1.61 0 3.09-.59 4.23-1.57l.27.28v.79l5 4.99L20.49 19zm-6 0C7.01 14 5 11.99 5 9.5S7.01 5 9.5 5S14 7.01 14 9.5S11.99 14 9.5 14"/></svg>
                        <h2>Search Content</h2>
                    </button>
                    
                    
                </div>
            </section>
        </>
    );
}