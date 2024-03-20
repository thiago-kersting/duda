<template>
    <section class="border">
            <h1>Quem ama mais?</h1>
            <div class="btns">
                <nuxt-link to="/Thi">
                    <button class="btn thi">
                        <i class="animation"></i>
                        Thi
                        <i class="animation"></i>
                    </button>
                </nuxt-link>
                <nuxt-link to="/Duda">
                    <button class="btn">
                        <i class="animation"></i>
                        Duda
                        <i class="animation"></i>
                    </button>
                </nuxt-link>
            </div>
        </section>
</template>

<style scoped>

.btns {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

.thi {
    background: #7703e4 !important;
}

.btn {
  outline: 0;
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  background: #e403b4;
  min-width: 200px;
  border: 0;
  border-radius: 4px;
  box-shadow: 0 4px 12px rgba(0, 0, 0, .1);
  box-sizing: border-box;
  padding: 16px 20px;
  color: #fff;
  font-size: 12px;
  font-weight: 600;
  letter-spacing: 1.2px;
  text-transform: uppercase;
  overflow: hidden;
  cursor: pointer;
}

.btn:hover {
  opacity: .95;
}

.btn .animation {
  border-radius: 100%;
  animation: ripple 0.6s linear infinite;
}

@keyframes ripple {
  0% {
    box-shadow: 0 0 0 0 rgba(255, 255, 255, 0.1), 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1);
  }

  100% {
    box-shadow: 0 0 0 20px rgba(255, 255, 255, 0.1), 0 0 0 40px rgba(255, 255, 255, 0.1), 0 0 0 60px rgba(255, 255, 255, 0.1), 0 0 0 80px rgba(255, 255, 255, 0);
  }
}
</style>