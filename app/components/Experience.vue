<template>
    <div>
    <v-row no-gutters class="w-100 page-container">
    <v-card width="90%" class="about-card slide-in pa-4">
      <v-card-text class="about-text">
        I'm a Web Developer experienced in
        <span class="tech-highlight">Vue.js</span>,
        <span class="tech-highlight">Nuxt.js</span>,
        <span class="tech-highlight">Node.js</span>,
        <span class="tech-highlight">Express.js</span>,
        <span class="tech-highlight">MySQL</span>,
        <span class="tech-highlight">PostgreSQL</span>,
        <span class="tech-highlight">AWS</span>, and
        <span class="tech-highlight">Git/GitHub/GitHub Desktop</span>.
        I also work with <span class="tech-highlight">Figma</span> for UI/UX design.
        and have an experience integrating <span class="tech-highlight">Socket.IO</span> for real-time communication in web applications.
        </v-card-text>
    </v-card>
    </v-row>
    <br/>
    <v-row no-gutters class="page-container w-100">
        <v-card width="90%" class="about-card slide-in pa-4 about-text">
        <p>Previous Projects:<span style="color:gray"> POS system website (Front End And Api Integration), Document Management Systems(Full Stack)
             and Booking System(Assistant)</span></p>
        </v-card>
    </v-row>
    </div>
</template>


<style scoped>
 .slide-in {
  animation: slideFromLeft 1s cubic-bezier(0.22, 1, 0.36, 1);
}

@keyframes slideFromLeft {
  from {
    opacity: 0;
    transform: translateX(-80px);
  }

  to {
    opacity: 1;
    transform: translateX(0);
  }
}
.page-container {
  display: flex;
  justify-content: center;
  align-items: center;
}
.about-card {
  background: #151515 !important;
  border: 1px solid rgba(255, 215, 0, 0.25);
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.25);
}

.about-text {
  padding: 10px !important;
  color: #d0d0d0;
  font-size: 1.01rem;
  line-height: 2;
  letter-spacing: 0.2px;
  box-sizing: border-box;
}

@media (max-width: 600px) {
  .about-text {
    padding: 16px !important;
  }
}
.tech-highlight {
  color: #ffd700;
  font-weight: 600;
  white-space: nowrap;
  text-shadow: 0 0 12px rgba(255, 215, 0, 0.12);
  transition: color 0.2s ease, text-shadow 0.2s ease;
}

.tech-highlight:hover {
  color: #ffe766;
  text-shadow: 0 0 10px rgba(255, 215, 0, 0.35);
}
</style>