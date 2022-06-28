export class Email {
  static validate (email: string): boolean {
    if (!email) {
      return false
    }

    const [local] = email.split('@')
    const localPartTotalOfChars = 64
    const totalCharsEmail = 320

    if (email.length > totalCharsEmail) {
      return false
    }

    if (local.length > localPartTotalOfChars) {
      return false
    }

    return true
  }
}
