<script setup lang="ts"></script>

<template>
  <footer class="footer">
    <div class="footer__top">
      <div class="footer__left">
        <span class="footer__text"> Is there a project?</span>
        <div class="footer__heading">Let&rsquo;s work together</div>
      </div>
      <div class="footer__right">
        <ul class="footer__contacts contacts list-reset">
          <li class="contacts__item">
            <h3 class="contacts__header">For all questions</h3>
            <a
              href="tel:+79202780068"
              class="contacts__link contacts__link--tel"
              >+7 (920) 278—00—68</a
            >
            <a
              href="mailto:qtim@agency.com"
              class="contacts__link contacts__link--mail"
              >qtim@agency.com</a
            >
          </li>
          <li class="contacts__item">
            <h3 class="contacts__header">Office in Russia</h3>
            <span class="contacts__address">
              139 Ruben Station Lake Drew, NM 52678
            </span>
            <a
              href="https://google.com"
              class="contacts__social"
            >
              <img
                src="@/assets/img/social-logo.svg"
                alt="Логотип соцсети"
              />
            </a>
          </li>
          <li class="contacts__item">
            <h3 class="contacts__header">Office in Dubai</h3>
            <span class="contacts__address">
              139 Ruben Station Lake Drew, NM 52678
            </span>
            <a
              href="https://google.com"
              class="contacts__social"
            >
              <img
                src="@/assets/img/social-logo.svg"
                alt="Логотип соцсети"
              />
            </a>
          </li>
        </ul>
      </div>
    </div>
    <div class="footer__bottom">
      <div class="footer__bottom-left">
        <ul class="footer__networks networks list-reset">
          <li class="networks__item">
            <a
              href="#"
              class="networks__link"
              >Facebook</a
            >
          </li>
          <li class="networks__item">
            <a
              href="#"
              class="networks__link"
              >Instagram</a
            >
          </li>
          <li class="networks__item">
            <a
              href="#"
              class="networks__link"
              >Telegram</a
            >
          </li>
        </ul>
      </div>
      <div class="footer__bottom-right">
        <ul class="footer__networks networks list-reset">
          <li class="networks__item">
            <a
              href="#"
              class="networks__link"
              >Facebook</a
            >
          </li>
          <li class="networks__item">
            <a
              href="#"
              class="networks__link"
              >Instagram</a
            >
          </li>
          <li class="networks__item">
            <a
              href="#"
              class="networks__link"
              >Telegram</a
            >
          </li>
        </ul>
      </div>
    </div>
  </footer>
</template>

<style scoped lang="scss">
.footer {
  position: relative;
  padding: 140px 112px;
  padding-bottom: 30px;
  background-color: var(--clr-prime);
  overflow: hidden;

  &::after {
    content: 'Go';
    position: absolute;
    left: 50%;
    bottom: -200px;
    display: flex;
    justify-content: center;
    padding-top: 120px;
    border-radius: 50%;
    width: 385px;
    height: 385px;
    font-size: 32px;
    font-weight: 400;
    line-height: 100%; /* 32px */
    color: #fff;
    background-color: black;
    transform: translateX(-50%);
  }

  &__top {
    display: flex;
    justify-content: space-between;
    margin-bottom: 143px;
  }

  &__heading {
    margin-top: 56px;
    max-width: 464px;
    font-size: 97px;
    font-weight: 400;
    line-height: 1;
    color: var(--clr-text);
  }

  &__right {
    max-width: 152px;
    margin-right: 232px;
  }

  &__bottom {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }
}

.contacts {
  display: flex;
  flex-direction: column;
  gap: 36px;

  &__header {
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.16px;
    color: var(--clr-text);
  }

  &__item {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  &__link {
    font-size: 16px;
    font-weight: 400;
    line-height: 120%; /* 19.2px */
    letter-spacing: 0.16px;
    text-decoration: none;
    color: var(--clr-text);
  }

  &__social {
    align-self: flex-start;
  }
}

.networks {
  display: flex;
  gap: 32px;

  &__link {
    font-size: 16px;
    font-weight: 400;
    line-height: 120%;
    letter-spacing: 0.16px;
    color: var(--clr-text);
  }
}
</style>
