import { app } from "./app";
import { env } from "./config/env";
import { initDB } from "./config/db";

// panggil initDB
initDB();

app.listen(env.PORT, ()=>{
    console.log(`🚀 Server running at http://localhost:${env.PORT}`);
});

//     # Server
//     3. Fungsi initDB diletakkan dalam config/db.ts
//     4. server.ts mengimport app, env, & initDB
//     5. server.ts menjalankan `app.listen(env.PORT)`, initDB(), & console.log(`🚀 Server running ...`)
// ========================= */
