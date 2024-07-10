class Github {
  constructor() {
    this.client_id = "Ov23ctfchEQFCjtOGzZf";
    this.client_secret = "ce7aa68c1c51785488196e93781b69218e457d90";
  }

  async getUser(user) {
    const profileResponse = await fetch(
      `https://api.github.com/users/${user}?client_id=${this.client_id}&client_secret=${this.client_secret}`
    );

    const profile = await profileResponse.json();

    return {
      profile,
    };
  }
}
