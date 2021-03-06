package imdb.controller;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.PostMapping;
import imdb.bindingModel.FilmBindingModel;
import imdb.entity.Film;
import imdb.repository.FilmRepository;

import java.util.List;

@Controller
public class FilmController {

	private final FilmRepository filmRepository;

	@Autowired
	public FilmController(FilmRepository filmRepository) {
		this.filmRepository = filmRepository;
	}

	@GetMapping("/")
	public String index(Model model) {

		// TODO
		List<Film> films = filmRepository.findAll();

		model.addAttribute("view", "film/index");
		model.addAttribute("films", films);

		return "base-layout";
	}

	@GetMapping("/create")
	public String create(Model model) {
		// TODO

		model.addAttribute("view", "film/create");
		return "base-layout";

	}

	@PostMapping("/create")
	public String createProcess(Model model, FilmBindingModel filmBindingModel) {
		// TODO
		Film film = new Film(filmBindingModel.getName(),
				filmBindingModel.getDirector(),
				filmBindingModel.getGenre(),
				filmBindingModel.getYear());
		filmRepository.saveAndFlush(film);
		return "redirect:/";
	}

	@GetMapping("/edit/{id}")
	public String edit(Model model, @PathVariable int id) {
		// TODO
		Film film = filmRepository.findOne(id);
		model.addAttribute("film", film);
		model.addAttribute("view", "film/edit");
		return "base-layout";
	}

	@PostMapping("/edit/{id}")
	public String editProcess(Model model, @PathVariable int id, FilmBindingModel filmBindingModel) {
		// TODO
		Film film = filmRepository.findOne(id);
		film.setDirector(filmBindingModel.getDirector());
		film.setName(filmBindingModel.getName());
		film.setGenre(filmBindingModel.getGenre());
		film.setYear(filmBindingModel.getYear());
		filmRepository.saveAndFlush(film);
		return "redirect:/";
	}

	@GetMapping("/delete/{id}")
	public String delete(Model model, @PathVariable int id) {
		// TODO
		Film film = filmRepository.findOne(id);
		model.addAttribute("film", film);
		model.addAttribute("view", "film/delete");
		return "base-layout";
	}

	@PostMapping("/delete/{id}")
	public String deleteProcess(@PathVariable int id) {
		// TODO
		filmRepository.delete(id);
		return "redirect:/";
	}
}
