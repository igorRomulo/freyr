export class Email {
  static validate (email: string): boolean {
    if (!email) {
      return false
    }

    const [local, domain] = email.split('@')
    const localPartTotalOfChars = 64
    const domainTotalOfChars = 255
    const totalCharsEmail = 320

    if (email.length > totalCharsEmail) {
      return false
    }

    if (domain.length > domainTotalOfChars) {
      return false
    }

    if (local.length > localPartTotalOfChars) {
      return false
    }

    return true
  }
}
