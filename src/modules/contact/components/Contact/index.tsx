import Input from "@shared/components/atoms/Input";

export default function Contact() {
  return (
    <form>
      <section>
        <Input type="text" name="name" id="name" label="Digite seu nome" />
      </section>
      <section>
        <Input type="text" name="phone" id="phone" label="Digite seu telefone" />
      </section>
      <section>
        <label htmlFor="city">Cidade</label>
        <select name="city" id="city">
          <option value="barueri">Barueri</option>
          <option value="carapicuiba">Carapicuíba</option>
          <option value="osasco">Osasco</option>
          <option value="jandira">Jandira</option>
          <option value="itapevi">Itapevi</option>
          <option value="cotia">Cotia</option>
          <option value="capital">Capital</option>
        </select>
      </section>
      <section>
        <label htmlFor="description">Descrição</label>
        <textarea name="description" id="description" />
      </section>
    </form>
  )
}
