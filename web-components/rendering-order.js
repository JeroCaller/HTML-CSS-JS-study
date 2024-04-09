class UserProfile extends HTMLElement {
    connectedCallback() {
        let msg = `사용자 정보
        사용자 이름: ${this.innerHTML}`;
        alert(msg);
    }
}

customElements.define("user-profile", UserProfile);