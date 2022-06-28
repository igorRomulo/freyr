export class Email {
  static validate (email: string): boolean {
    if (!email) {
      return false
    }

    const [local] = email.split('@')
    const localPartTotalOfChars = 64

    if (local.length > localPartTotalOfChars) {
      return false
    }

    return true
  }
}
